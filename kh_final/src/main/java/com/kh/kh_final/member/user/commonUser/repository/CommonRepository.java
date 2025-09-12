package com.kh.kh_final.member.user.commonUser.repository;

import com.kh.kh_final.member.user.commonUser.entity.CommonEntity;
import com.kh.kh_final.member.user.commonUser.enums.ApproveState;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommonRepository extends JpaRepository<CommonEntity,Long> {


    CommonEntity findByCommonIdAndApproveStateNot(String commonId, ApproveState approveState);
}
