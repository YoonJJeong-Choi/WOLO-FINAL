package com.kh.kh_final.member.user.companyUser.repository;

import com.kh.kh_final.member.user.common.enums.ApproveState;
import com.kh.kh_final.member.user.companyUser.entity.CompanyUserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyUserRepository extends JpaRepository<CompanyUserEntity,Long> {
    CompanyUserEntity findByCompanyUserEmail(String email);
    CompanyUserEntity findByCompanyIdAndApproveStateNot(String companyId, ApproveState approveState);
}
