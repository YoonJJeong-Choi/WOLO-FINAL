package com.kh.kh_final.member.user.common.dto;

import lombok.Getter;

@Getter
public class EmailRespDto {
    private int errorCode;
    private String message;

    public EmailRespDto(int errorEmailCode, String message) {
        this.errorCode = errorEmailCode;
        this.message = message;
    }
}
