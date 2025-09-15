package com.kh.kh_final.member.user.companyUser.entity;

import com.kh.kh_final.member.user.common.enums.ApproveState;
import com.kh.kh_final.member.user.companyUser.dto.CompanyUserReqDto;
import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDateTime;

@Entity
@Table(name = "company")
@Getter
public class CompanyUserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long no;
    @Column(nullable = false, unique = true)
    private String companyId;
    @Column(nullable = false)
    private String companyPassword;
    @Column(nullable = false)
    private String companyName;
    @Column(nullable = false)
    private String companyAddress;
    @Column(nullable = false)
    private String companyPhoneNumber;
    @Column(nullable = false)
    private String companyUserEmail;
    @Column(nullable = false)
    private LocalDateTime companyJoinDate;
    private LocalDateTime companyUpdateDate;
    @Enumerated(EnumType.STRING)
    private ApproveState approveState;
    @Column(nullable = false)
    private Boolean emailCheck;

    public CompanyUserEntity() {
        approveState = ApproveState.WAIT;
        companyJoinDate = LocalDateTime.now();
        emailCheck = false;
    }

    public static CompanyUserEntity from(CompanyUserReqDto reqDto){
        CompanyUserEntity commonUserEntity = new CompanyUserEntity();
        commonUserEntity.companyId = reqDto.getCompanyId();
        commonUserEntity.companyPassword=reqDto.getCompanyPassword();
        commonUserEntity.companyName=reqDto.getCompanyName();
        commonUserEntity.companyAddress=reqDto.getCompanyAddress();
        commonUserEntity.companyPhoneNumber=reqDto.getCompanyPhoneNumber();
        commonUserEntity.companyUserEmail=reqDto.getCompanyUserEmail();
        return commonUserEntity;
    }

    public void checkEmail(){
        this.emailCheck = true;
    }
}
