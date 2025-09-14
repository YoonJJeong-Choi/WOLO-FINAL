package com.kh.kh_final.member.user.common.exception.memberException;

import com.kh.kh_final.member.user.common.enums.CommonErrorCode;
import lombok.Getter;

@Getter
public class CommonUserException extends RuntimeException {
    private final int errorMemberCode;

    public CommonUserException(CommonErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorMemberCode = errorCode.getErrorCode();
    }
}
