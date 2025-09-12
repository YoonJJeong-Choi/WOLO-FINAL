package com.kh.kh_final.member.user.common.dto;

import lombok.Getter;

@Getter
public class ErrorRespDto {
    private int errorCode;
    private String message;

    public ErrorRespDto(int errorCode,String message){
        this.errorCode = errorCode;
        this.message = message;
    }
}
