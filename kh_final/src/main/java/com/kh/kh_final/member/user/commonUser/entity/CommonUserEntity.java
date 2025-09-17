package com.kh.kh_final.member.user.commonUser.entity;

import com.kh.kh_final.member.user.commonUser.dto.CommonUserReqDto;
import com.kh.kh_final.member.user.common.enums.ApproveState;
import jakarta.persistence.*;
import lombok.Getter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDateTime;

@Entity
@Table(name = "common")
@Getter
public class CommonUserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commonUserNo;
    @Column(nullable = false,unique = true)
    private String commonId;
    @Column(nullable = false)
    private String commonPassword;
    @Column(nullable = false)
    private String commonNickName;
    @Column(nullable = false)
    private String commonName;
    @Column(nullable = false,unique = true)
    private String commonUserEmail;
    @Column(nullable = false)
    private String commonPhoneNumber;
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

    public CommonUserEntity(){
        approveState = ApproveState.WAIT;
        commonJoinDate = LocalDateTime.now();
        emailCheck = false;
    }

    public static CommonUserEntity from(CommonUserReqDto reqDto, BCryptPasswordEncoder passwordEncoder){
        CommonUserEntity commonUserEntity = new CommonUserEntity();
        commonUserEntity.commonId = reqDto.getCommonId();
        commonUserEntity.commonPassword=passwordEncoder.encode(reqDto.getCommonPassword());
        commonUserEntity.commonNickName=reqDto.getCommonNickName();
        commonUserEntity.commonName=reqDto.getCommonName();
        commonUserEntity.commonUserEmail=reqDto.getCommonEmail();
        commonUserEntity.commonPhoneNumber =reqDto.getCommonPhoneNumber();
        commonUserEntity.commonAddress=reqDto.getCommonAddress();
        return commonUserEntity;
    }

    public void checkEmail(){
        this.emailCheck = true;
    }
}
