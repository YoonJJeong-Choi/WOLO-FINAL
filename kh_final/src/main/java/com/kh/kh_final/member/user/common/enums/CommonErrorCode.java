package com.kh.kh_final.member.user.common.enums;

import lombok.Getter;

@Getter
public enum CommonErrorCode {

    //에러코드 1000번때는 일반 유저 에러
    USER_NOT_FOUND(1000,"유저를 찾을 수 없습니다." ),
    PASSWORD_MISSMATCH(1001,"비밀번호가 일치하지 않습니다."),
    PASSWORD_EMPTY(1002, "비밀번호에 null, 공백문자를 입력할 수 없습니다.");
    
    private final int errorCode;
    private final String message;

    CommonErrorCode(int errorCode, String message) {
        this.errorCode = errorCode;
        this.message = message;
    }

}
