package com.kh.kh_final.member.user.hostUser.dto;

import com.kh.kh_final.member.user.common.enums.ApproveState;
import com.kh.kh_final.member.user.hostUser.entity.HostUserEntity;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class HostUserRespDto {
    private String hostId;
    private String hostName;
    private String hostUserEmail;
    private String hostPhoneNumber;
    private String hostAddress;
    private LocalDateTime hostJoinDate;
    private LocalDateTime hostUpdateDate;
    private ApproveState approveState;

    public static HostUserRespDto from(HostUserEntity dto) {
        HostUserRespDto hostUserRespDto = new HostUserRespDto();
        hostUserRespDto.hostId = dto.getHostId();
        hostUserRespDto.hostName = dto.getHostName();
        hostUserRespDto.hostUserEmail = dto.getHostUserEmail();
        hostUserRespDto.hostPhoneNumber = dto.getHostPhoneNumber();
        hostUserRespDto.hostAddress = dto.getHostAddress();
        hostUserRespDto.hostJoinDate = dto.getHostJoinDate();
        hostUserRespDto.hostUpdateDate = dto.getHostUpdateDate();
        hostUserRespDto.approveState = dto.getApproveState();
        return hostUserRespDto;
    }
}
