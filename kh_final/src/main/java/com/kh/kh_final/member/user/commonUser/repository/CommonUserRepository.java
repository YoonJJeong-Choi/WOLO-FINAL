package com.kh.kh_final.member.user.commonUser.repository;

import com.kh.kh_final.member.user.commonUser.entity.CommonUserEntity;
import com.kh.kh_final.member.user.common.enums.ApproveState;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommonUserRepository extends JpaRepository<CommonUserEntity,Long> {


    CommonUserEntity findByCommonIdAndApproveStateNot(String commonId, ApproveState approveState);

    CommonUserEntity findByCommonUserEmail(String email);
}
