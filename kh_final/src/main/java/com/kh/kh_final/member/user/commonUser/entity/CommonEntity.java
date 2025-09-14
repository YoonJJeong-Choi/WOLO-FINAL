package com.kh.kh_final.member.user.commonUser.entity;

import com.kh.kh_final.member.user.commonUser.dto.CommonReqDto;
import com.kh.kh_final.member.user.commonUser.enums.ApproveState;
import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDateTime;

@Entity
@Table(name = "common")
@Getter
public class CommonEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commonUserNo;
    @Column(nullable = false,unique = false)
    private String commonId;
    @Column(nullable = false)
    private String commonPassword;
    @Column(nullable = false)
    private String commonNickName;
    @Column(nullable = false)
    private String commonName;
    @Column(nullable = false)
    private String commonEmail;
    @Column(nullable = false)
    private String commonPhoneNo;
    @Column(nullable = false)
    private String commonAddress;
    @Column(nullable = false)
    private LocalDateTime commonJoinDate;
    private LocalDateTime commonUpdateDate;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ApproveState approveState;
    @Column(nullable = false)
    private Boolean emailCheck;

    public CommonEntity(){
        approveState = ApproveState.WAIT;
        commonJoinDate = LocalDateTime.now();
        emailCheck = false;
    }

    public static CommonEntity from(CommonReqDto reqDto){
        CommonEntity commonEntity = new CommonEntity();
        commonEntity.commonId = reqDto.getCommonId();
        commonEntity.commonPassword=reqDto.getCommonPassword();
        commonEntity.commonNickName=reqDto.getCommonNickName();
        commonEntity.commonName=reqDto.getCommonName();
        commonEntity.commonEmail=reqDto.getCommonEmail();
        commonEntity.commonPhoneNo=reqDto.getCommonPhoneNo();
        commonEntity.commonAddress=reqDto.getCommonAddress();
        return commonEntity;
    }

    public void checkEmail(){
        this.emailCheck = true;
    }
}
