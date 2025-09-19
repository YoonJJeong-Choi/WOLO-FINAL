package com.kh.kh_final.member.user.commonUser.dto;

import com.kh.kh_final.member.user.commonUser.entity.CommonUserEntity;
import com.kh.kh_final.member.user.common.enums.ApproveState;
import com.kh.kh_final.member.user.security.CommonUserDetails;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CommonUserRespDto {
    private String commonId;
    private String commonNickName;
    private String commonName;
    private String commonEmail;
    private String commonPhoneNumber;
    private String commonAddress;
    private LocalDateTime commonJoinDate;
    private LocalDateTime commonUpdateDate;
    private ApproveState approveState;

    public static CommonUserRespDto from(CommonUserDetails userDetails) {
        CommonUserRespDto commonUserRespDto = new CommonUserRespDto();
        commonUserRespDto.commonId = userDetails.getCommonId();
        commonUserRespDto.commonNickName = userDetails.getCommonNickName();
        commonUserRespDto.commonName = userDetails.getCommonName();
        commonUserRespDto.commonEmail = userDetails.getCommonUserEmail();
        commonUserRespDto.commonPhoneNumber = userDetails.getCommonPhoneNumber();
        commonUserRespDto.commonAddress = userDetails.getCommonAddress();
        commonUserRespDto.commonJoinDate = userDetails.getCommonJoinDate();
        commonUserRespDto.commonUpdateDate = userDetails.getCommonUpdateDate();
        commonUserRespDto.approveState = userDetails.getApproveState();
        return commonUserRespDto;
    }

}
