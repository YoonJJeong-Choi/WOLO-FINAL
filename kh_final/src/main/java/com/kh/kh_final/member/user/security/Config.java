package com.kh.kh_final.member.user.security;

import com.kh.kh_final.member.user.common.filter.JwtFilter;
import com.kh.kh_final.member.user.common.filter.LoginFilter;
import jakarta.servlet.http.HttpServletRequest;
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
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class Config {
    private final AuthenticationConfiguration authenticationConfiguration; //스프링이 제공해줌
    private final JwtUtil jwtUtil;

    @Bean
    public AuthenticationManager authenticationManager() throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder bCryptPasswordEncoder(){
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
                        .requestMatchers("/api/common/**", "/admin/login").permitAll()
                        .requestMatchers("/api/admin/**").hasRole("ADMIN")
                        .anyRequest().authenticated()
        );

        //필터 추가하기 (로그인 필터 앞에,,,)
        JwtFilter jwtFilter = new JwtFilter(jwtUtil);
        hs.addFilterBefore(jwtFilter, LoginFilter.class);

        //필터 갈아끼우기
        AuthenticationManager authManager = authenticationManager();
        LoginFilter loginFilter = new LoginFilter( authManager , jwtUtil);
        loginFilter.setFilterProcessesUrl("/login");
        hs.addFilterAt(LoginFilter, UsernamePasswordAuthenticationFilter.class);

        //CORS
        hs.cors(
                corsConfigurer -> corsConfigurer.configurationSource(new CorsConfigurationSource() {
                    @Override
                    public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
                        CorsConfiguration conf = new CorsConfiguration();

                        conf.addAllowedOrigin("*");
                        conf.addAllowedMethod("*");
                        conf.addAllowedHeader("*");
                        conf.addExposedHeader("*");

                        return conf;
                    }
                })
        );


        return hs.build();
    }
}
