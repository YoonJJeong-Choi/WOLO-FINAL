package com.kh.kh_final.member.user.commonUser.filter;

import com.kh.kh_final.member.user.security.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collection;
import java.util.Collections;

@RequiredArgsConstructor
public class CommonUserJwtFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String authorization = request.getHeader("Authorization");

        if( authorization == null || !authorization.startsWith("Bearer ") ){
            System.out.println("토큰없음 ,,,,,");
            filterChain.doFilter(request , response);
            return;
        }

        String accessToken = authorization.split(" ")[1];

        if(jwtUtil.isExpired(accessToken)){
            System.out.println("토큰만료 ,,,,,");
            filterChain.doFilter(request , response);
            return;
        }

        String userId = jwtUtil.getUserId(accessToken);

        Collection authorities = Collections.emptyList();

        Authentication authToken = new UsernamePasswordAuthenticationToken( userId , null , authorities);
        SecurityContextHolder.getContext().setAuthentication(authToken);
        filterChain.doFilter(request, response);

    }
}
