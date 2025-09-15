package com.kh.kh_final.member.user.hostUser.repository;

import com.kh.kh_final.member.user.common.enums.ApproveState;
import com.kh.kh_final.member.user.hostUser.entity.HostUserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HostUserRepository extends JpaRepository<HostUserEntity,Long> {
    HostUserEntity findByHostUserEmail(String email);

    HostUserEntity findByHostIdAndApproveStateNot(String hostId, ApproveState approveState);
}
