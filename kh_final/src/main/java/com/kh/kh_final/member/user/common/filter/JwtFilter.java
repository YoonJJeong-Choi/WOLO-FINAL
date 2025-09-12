package com.kh.kh_final.member.user.common.filter;

import com.kh.kh_final.member.user.security.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {
    private final JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String authorization = request.getHeader("Authorization");

        if(authorization == null || !authorization.startsWith("Bearer ")){
            System.out.println("토큰이 존재하지 않습니다.");
            filterChain.doFilter(request,response);
            return;
        }

        String accessToken = authorization.split(" ")[1];

        if(jwtUtil.isExpired(accessToken)){
            System.out.println("토큰만료 ,,,,,");
            filterChain.doFilter(request , response);
            return;
        }

        String userId = JwtUtil.getUserId(accessToken);
        String userNick = JwtUtil.getUserNick(accessToken);
        String userRole = JwtUtil.getUserRole(accessToken);

        MemberVo vo = new MemberVo();
        vo.setUserId(userId);
        vo.setUserNick(userNick);
        vo.setUserRole(userRole);

        MyUserDetails principal = new MyUserDetails(vo);
        String credentials = null;
        Collection authorities = principal.getAuthorities();

        Authentication authToken = new UsernamePasswordAuthenticationToken( principal , credentials , authorities );
        SecurityContextHolder.getContext().setAuthentication(authToken);
        filterChain.doFilter(request, response);




    }
}
