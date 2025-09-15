package com.kh.kh_final.member.user.commonUser.dto;

import com.kh.kh_final.member.user.commonUser.entity.CommonUserEntity;
import com.kh.kh_final.member.user.commonUser.enums.ApproveState;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CommonUserRespDto {
    private String commonId;
    private String commonNickName;
    private String commonName;
    private String commonEmail;
    private String commonPhoneNo;
    private String commonAddress;
    private LocalDateTime commonJoinDate;
    private LocalDateTime commonUpdateDate;
    private ApproveState approveState;

    public static CommonUserRespDto from(CommonUserEntity entity) {
        CommonUserRespDto commonUserRespDto = new CommonUserRespDto();
        commonUserRespDto.commonId = entity.getCommonId();
        commonUserRespDto.commonNickName = entity.getCommonNickName();
        commonUserRespDto.commonName = entity.getCommonName();
        commonUserRespDto.commonEmail = entity.getCommonUserEmail();
        commonUserRespDto.commonPhoneNo = entity.getCommonPhoneNo();
        commonUserRespDto.commonAddress = entity.getCommonAddress();
        commonUserRespDto.commonJoinDate = entity.getCommonJoinDate();
        commonUserRespDto.commonUpdateDate = entity.getCommonUpdateDate();
        commonUserRespDto.approveState = entity.getApproveState();
        return commonUserRespDto;
    }
}
