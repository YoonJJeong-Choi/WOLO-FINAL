package com.kh.kh_final.member.user.commonUser.controller;

import com.kh.kh_final.member.user.commonUser.dto.CommonReqDto;
import com.kh.kh_final.member.user.commonUser.dto.CommonRespDto;
import com.kh.kh_final.member.user.commonUser.service.CommonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("api/common")
@RequiredArgsConstructor
public class CommonApiController {
    private final CommonService commonService;
    @PostMapping("join")
    public ResponseEntity<String> join(@RequestBody CommonReqDto reqDto){
        commonService.join(reqDto);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("회원가입 성공!");
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
