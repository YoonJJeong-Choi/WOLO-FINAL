package com.kh.kh_final.member.user.common.enums;

import lombok.Getter;

@Getter
public enum CommonErrorCode {

    //1000번 공통 관련 에러
    EMAIL_SEND_FAIL(1000,"이메일 발송 실패"),
    JSON_PARSE_FAIL(1001,"JSON 파싱 실패" ),
    UNKNOWN_ERROR(9999,"알 수 없는 오류"),

    //2000번 유저 로그인 에러
    USER_NOT_FOUND(2000,"유저를 찾을 수 없습니다." ),
    PASSWORD_MISMATCH(2001,"비밀번호가 일치하지 않습니다."),
    PASSWORD_EMPTY(2002, "비밀번호는 공백문자, null이 될 수 없습니다.");

    private final int errorCode;
    private final String message;

    CommonErrorCode(int errorCode, String message) {
        this.errorCode = errorCode;
        this.message = message;
    }

}
