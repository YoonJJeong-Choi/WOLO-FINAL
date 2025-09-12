package com.kh.kh_final.member.user.common.filter;

import com.kh.kh_final.member.user.security.JwtUtil;
import org.springframework.security.authentication.AuthenticationManager;

public class LoginFilter {
    public LoginFilter(AuthenticationManager authManager, JwtUtil jwtUtil) {
    }

    public void setFilterProcessesUrl(String s) {
    }
}
