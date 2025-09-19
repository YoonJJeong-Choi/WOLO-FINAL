package com.kh.kh_final.member.user.commonUser.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kh.kh_final.member.user.common.enums.CommonErrorCode;
import com.kh.kh_final.member.user.common.exception.memberException.CommonUserException;
import com.kh.kh_final.member.user.commonUser.dto.CommonUserReqDto;
import com.kh.kh_final.member.user.commonUser.dto.CommonUserRespDto;
import com.kh.kh_final.member.user.security.CommonUserDetails;
import com.kh.kh_final.member.user.security.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
public class CommonUserLoginFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("[CommonUserLoginFilter]: 로그인 시도");

        try {
            CommonUserReqDto reqDto = mapper.readValue(request.getInputStream(), CommonUserReqDto.class);
            checkRequest(reqDto);
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(reqDto.getCommonId(), reqDto.getCommonPassword());
            return authenticationManager.authenticate(authToken);
        } catch (Exception e) {
            throw new CommonUserException(CommonErrorCode.UNKNOWN_ERROR);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException {
        System.out.println("[CommonUserLoginFilter]: 로그인 성공");

        CommonUserDetails userDetails = (CommonUserDetails) authResult.getPrincipal();
        String jwt = jwtUtil.createJWT(userDetails.getUsername());
        response.addHeader("Authorization", "Bearer " + jwt);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        CommonUserRespDto respDto = new CommonUserRespDto();

        Map<String, Object> body = new HashMap<>();
        body.put("message", "로그인 성공!");
        body.put("data", respDto);

        response.getWriter().write(mapper.writeValueAsString(body));

    }



    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException {
        System.out.println("[CommonUserLoginFilter]: 로그인 실패");

        if(failed instanceof BadCredentialsException){
            response.addHeader("ErrorCode", CommonErrorCode.PASSWORD_MISMATCH.getMessage());
        }


    }


    private void checkRequest(CommonUserReqDto reqDto) {
        if (reqDto.getCommonId() == null || reqDto.getCommonId().isBlank()) {
            throw new CommonUserException(CommonErrorCode.USER_NOT_FOUND);
        }
        if (reqDto.getCommonPassword() == null || reqDto.getCommonPassword().isBlank()) {
            throw new CommonUserException(CommonErrorCode.PASSWORD_EMPTY);
        }
    }
}
