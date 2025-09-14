package com.kh.kh_final.member.user.common.exception.emailException;

import com.kh.kh_final.member.user.common.enums.CommonErrorCode;
import lombok.Getter;

@Getter
public class EmailException extends RuntimeException {
    private final int errorEmailCode;

    public EmailException(CommonErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorEmailCode = errorCode.getErrorCode();
    }

}
