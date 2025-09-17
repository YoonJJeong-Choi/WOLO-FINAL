package com.kh.kh_final.member.user.security;

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
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class Config {
    private final AuthenticationConfiguration authenticationConfiguration;

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
                        .requestMatchers( "/home").permitAll()
                        //일반 계졍 접근 권한
                        .requestMatchers("/api/common/login", "/api/common/join", "/api/common/check").permitAll()
                        //기업 계정 접근 권한 (미작성)
                        //호스트 계정 접근 권한 (미작성)
                        .anyRequest().authenticated()
        );
        return hs.build();
    }

}
