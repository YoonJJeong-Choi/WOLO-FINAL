package com.kh.kh_final.member.user.hostUser.controller;

import com.kh.kh_final.member.user.hostUser.dto.HostUserReqDto;
import com.kh.kh_final.member.user.hostUser.dto.HostUserRespDto;
import com.kh.kh_final.member.user.hostUser.service.HostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("api/host")
@RequiredArgsConstructor
public class HostUserApiController {

    private final HostService hostService;

    @PostMapping("join")
    public ResponseEntity<String> join(@RequestBody HostUserReqDto reqDto) {
        hostService.join(reqDto);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("회원가입 요청 완료! 입력하신 이메일을 확인하고 인증해주세요!");
    }

    @GetMapping("check")
    public ResponseEntity<String> checkEmail(@RequestParam String email) {
        hostService.checkEmail(email);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("이메일 인증 성공! 관리자 승인 후 회원 가입이 완료됩니다.");

    }


    @PostMapping("login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody HostUserReqDto reqDto) {
        HostUserRespDto respDto = hostService.login(reqDto);
        Map<String, Object> map = new HashMap<>();
        map.put("message", "로그인 성공!");
        map.put("data", respDto);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(map);
    }

}


