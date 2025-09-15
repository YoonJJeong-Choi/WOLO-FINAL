package com.kh.kh_final.member.user.commonUser.dto;

import com.kh.kh_final.member.user.commonUser.entity.CommonEntity;
import com.kh.kh_final.member.user.commonUser.enums.ApproveState;
import lombok.Getter;

import java.time.LocalDateTime;

//마이페이지 사용할 때는 필요함 로그인 시도 시 필요 없음
@Getter
public class CommonRespDto {
    private String commonId;
    private String commonNickName;
    private String commonName;
    private String commonEmail;
    private String commonPhoneNo;
    private String commonAddress;
    private LocalDateTime commonJoinDate;
    private LocalDateTime commonUpdateDate;
    private ApproveState approveState;

    public static CommonRespDto from(CommonEntity entity) {
        CommonRespDto commonRespDto = new CommonRespDto();
        commonRespDto.commonId = entity.getCommonId();
        commonRespDto.commonNickName = entity.getCommonNickName();
        commonRespDto.commonName = entity.getCommonName();
        commonRespDto.commonEmail = entity.getCommonEmail();
        commonRespDto.commonPhoneNo = entity.getCommonPhoneNo();
        commonRespDto.commonAddress = entity.getCommonAddress();
        commonRespDto.commonJoinDate = entity.getCommonJoinDate();
        commonRespDto.commonUpdateDate = entity.getCommonUpdateDate();
        commonRespDto.approveState = entity.getApproveState();
        return commonRespDto;
    }
}
