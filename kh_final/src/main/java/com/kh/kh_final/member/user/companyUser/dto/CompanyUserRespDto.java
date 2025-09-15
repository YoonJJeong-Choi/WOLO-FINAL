package com.kh.kh_final.member.user.companyUser.dto;

import com.kh.kh_final.member.user.commonUser.enums.ApproveState;
import com.kh.kh_final.member.user.companyUser.entity.CompanyUserEntity;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CompanyUserRespDto {
    private String companyId;
    private String companyName;
    private String companyAddress;
    private String companyPhoneNumber;
    private String companyUserEmail;
    private LocalDateTime companyJoinDate;
    private LocalDateTime companyUpdateDate;
    private ApproveState approveState;

    public static CompanyUserRespDto from(CompanyUserEntity companyUserEntity){
        CompanyUserRespDto companyUserRespDto = new CompanyUserRespDto();
        companyUserRespDto.companyId = companyUserEntity.getCompanyId();
        companyUserRespDto.companyName = companyUserEntity.getCompanyName();
        companyUserRespDto.companyAddress = companyUserEntity.getCompanyAddress();
        companyUserRespDto.companyPhoneNumber = companyUserEntity.getCompanyPhoneNumber();
        companyUserRespDto.companyUserEmail = companyUserEntity.getCompanyUserEmail();
        companyUserRespDto.companyJoinDate = companyUserEntity.getCompanyJoinDate();
        companyUserRespDto.companyUpdateDate = companyUserEntity.getCompanyUpdateDate();
        companyUserRespDto.approveState = companyUserEntity.getApproveState();
        return companyUserRespDto;
    }
}
