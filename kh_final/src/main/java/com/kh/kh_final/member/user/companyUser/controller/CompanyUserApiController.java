package com.kh.kh_final.member.user.companyUser.controller;

import com.kh.kh_final.member.user.commonUser.dto.CommonUserRespDto;
import com.kh.kh_final.member.user.companyUser.dto.CompanyUserReqDto;
import com.kh.kh_final.member.user.companyUser.dto.CompanyUserRespDto;
import com.kh.kh_final.member.user.companyUser.service.CompanyUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/company")
public class CompanyUserApiController {
    private final CompanyUserService companyUserService;
    @PostMapping("join")
    public ResponseEntity<String> join(@RequestBody CompanyUserReqDto reqDto){
        companyUserService.join(reqDto);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("회원가입 요청 완료! 입력하신 이메일을 확인하고 인증해주세요!");
    }

    @GetMapping("check")
    public ResponseEntity<String> checkEmail(@RequestParam String email) {
        companyUserService.checkEmail(email);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("이메일 인증 성공! 관리자 승인 후 회원 가입이 완료됩니다.");

    }



    @PostMapping("login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody CompanyUserReqDto reqDto){
        CompanyUserRespDto respDto = companyUserService.login(reqDto);
        Map<String, Object> map = new HashMap<>();
        map.put("message","로그인 성공!");
        map.put("data",respDto);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(map);
    }
}
