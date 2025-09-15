package com.kh.kh_final.member.user.companyUser.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CompanyUserReqDto {
    private String companyId;
    private String companyPassword;
    private String companyName;
    private String companyAddress;
    private String companyPhoneNumber;
    private String companyUserEmail;
}
