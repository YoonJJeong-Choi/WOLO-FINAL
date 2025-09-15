package com.kh.kh_final.member.user.hostUser.entity;

import com.kh.kh_final.member.user.common.enums.ApproveState;
import com.kh.kh_final.member.user.hostUser.dto.HostUserReqDto;
import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDateTime;

@Entity
@Table(name = "host")
@Getter
public class HostUserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long no;
    @Column(nullable = false, unique = true)
    private String hostId;
    @Column(nullable = false)
    private String hostPassword;
    @Column(nullable = false)
    private String hostName;
    @Column(nullable = false)
    private String hostUserEmail;
    @Column(nullable = false)
    private String hostPhoneNumber;
    @Column(nullable = false)
    private String hostAddress;
    @Column(nullable = false)
    private LocalDateTime hostJoinDate;
    private LocalDateTime hostUpdateDate;
    @Enumerated(EnumType.STRING)
    private ApproveState approveState;
    @Column(nullable = false)
    private Boolean emailCheck;

    public HostUserEntity() {
        approveState = ApproveState.WAIT;
        hostJoinDate = LocalDateTime.now();
        emailCheck = false;
    }

    public static HostUserEntity from(HostUserReqDto dto) {
        HostUserEntity hostUserEntity = new HostUserEntity();
        hostUserEntity.hostId = dto.getHostId();
        hostUserEntity.hostPassword = dto.getHostPassword();
        hostUserEntity.hostName = dto.getHostName();
        hostUserEntity.hostUserEmail = dto.getHostUserEmail();
        hostUserEntity.hostPhoneNumber = dto.getHostPhoneNumber();
        hostUserEntity.hostAddress = dto.getHostAddress();
        return hostUserEntity;
    }


    public void checkEmail() {
        this.emailCheck = true;
    }
}
