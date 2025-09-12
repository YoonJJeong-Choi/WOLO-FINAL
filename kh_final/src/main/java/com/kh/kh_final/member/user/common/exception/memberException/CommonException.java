package com.kh.kh_final.member.user.common.exception.memberException;

import com.kh.kh_final.member.user.common.enums.CommonErrorCode;
import lombok.Getter;

@Getter
public class CommonException extends RuntimeException {
    private final int errorCode;

    public CommonException(CommonErrorCode commonErrorCode) {
        super(commonErrorCode.getMessage());
        this.errorCode = commonErrorCode.getErrorCode();
    }
}
