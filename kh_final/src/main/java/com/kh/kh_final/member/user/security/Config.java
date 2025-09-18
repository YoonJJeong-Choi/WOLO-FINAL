package com.kh.kh_final.member.user.security;

import com.kh.kh_final.member.user.commonUser.filter.CommonUserJwtFilter;
import com.kh.kh_final.member.user.commonUser.filter.CommonUserLoginFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class Config {
    private final AuthenticationConfiguration authenticationConfiguration;
    private final JwtUtil jwtUtil;

    @Bean
    public AuthenticationManager authenticationManager() throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity hs) throws Exception {

        hs.formLogin(AbstractHttpConfigurer::disable);
        hs.csrf(AbstractHttpConfigurer::disable);
        hs.httpBasic(AbstractHttpConfigurer::disable);
        hs.sessionManagement(x -> x.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        // 요청 URL에 대한 검증
        hs.authorizeHttpRequests(
                x -> x
                        .requestMatchers( "/**").permitAll()
//                        //일반 계졍 접근 권한
//                        .requestMatchers("/api/common/login", "/api/common/join", "/api/common/check").permitAll()
//                        //기업 계정 접근 권한
//                        .requestMatchers("/api/company/login", "/api/company/join", "/api/company/check").permitAll()
//                        //호스트 계정 접근 권한
//                        .requestMatchers("/api/host/login", "/api/host/join", "/api/host/check").permitAll()
//                        .anyRequest().authenticated()
        );

        AuthenticationManager authenticationManager = authenticationManager();

        CommonUserLoginFilter commonUserLoginFilter = new CommonUserLoginFilter(authenticationManager,jwtUtil);
//        CompanyUserLoginFilter companyUserLoginFilter = new CompanyUserLoginFilter(authenticationManager,jwtUtil);
//        HostUserLoginFilter hostUserLoginFilter = new HostUserLoginFilter(authenticationManager,jwtUtil);

        CommonUserJwtFilter CommonUserJwtFilter = new CommonUserJwtFilter(jwtUtil);

        hs.addFilterBefore(CommonUserJwtFilter, CommonUserLoginFilter.class);

        hs.addFilterAt(commonUserLoginFilter, UsernamePasswordAuthenticationFilter.class);
//        hs.addFilterAfter(companyUserLoginFilter,CommonUserLoginFilter.class);
//        hs.addFilterAfter(hostUserLoginFilter,CompanyUserLoginFilter.class);

        return hs.build();
    }

}
