package com.kh.kh_final.member.user.common.enums;

import lombok.Getter;

@Getter
public enum CommonErrorCode {
    //1000번 공통 계정 관련 에러
    EMAIL_SEND_FAIL(1000,"이메일 발송 실패"),
    //2000번 일반 유저 에러
    USER_NOT_FOUND(2000,"유저를 찾을 수 없습니다." ),
    PASSWORD_MISSMATCH(2001,"비밀번호가 일치하지 않습니다."),
    PASSWORD_EMPTY(2002, "비밀번호에 null, 공백문자를 입력할 수 없습니다.");

    private final int errorCode;
    private final String message;

    CommonErrorCode(int errorCode, String message) {
        this.errorCode = errorCode;
        this.message = message;
    }

}
