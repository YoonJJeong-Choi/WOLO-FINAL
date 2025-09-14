package com.kh.kh_final.member.user.commonUser.controller;

import com.kh.kh_final.member.user.commonUser.dto.CommonReqDto;
import com.kh.kh_final.member.user.commonUser.dto.CommonRespDto;
import com.kh.kh_final.member.user.commonUser.service.CommonUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("api/common")
@RequiredArgsConstructor
public class CommonApiController {
    private final CommonUserService commonService;
    @PostMapping("join")
    public ResponseEntity<String> join(@RequestBody CommonReqDto reqDto){
        commonService.join(reqDto);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("회원가입 요청 완료! 이메일 인증 후 가입이 완료됩니다!");
    }

    @GetMapping("check")
    public ResponseEntity<String> checkEmail(@RequestParam String email) {
        commonService.checkEmail(email);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("이메일 인증 성공! 관리자 승인 후 회원 가입이 완료됩니다.");

    }



    @PostMapping("login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody CommonReqDto reqDto){
        CommonRespDto respDto = commonService.login(reqDto);
        Map<String, Object> map = new HashMap<>();
        map.put("message","로그인 성공!");
        map.put("data",respDto);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(map);
    }

}
