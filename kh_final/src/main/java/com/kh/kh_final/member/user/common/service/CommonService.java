package com.kh.kh_final.member.user.common.service;

import com.kh.kh_final.member.user.commonUser.entity.CommonUserEntity;
import com.kh.kh_final.member.user.commonUser.repository.CommonUserRepository;
import com.kh.kh_final.member.user.companyUser.entity.CompanyUserEntity;
import com.kh.kh_final.member.user.companyUser.repository.CompanyUserRepository;
import com.kh.kh_final.member.user.hostUser.entity.HostUserEntity;
import com.kh.kh_final.member.user.hostUser.repository.HostUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class CommonService {

    private final CommonUserRepository commonUserRepository;
    private final CompanyUserRepository companyUserRepository;
    private final HostUserRepository hostUserRepository;

    public void join(CommonUserEntity commonUserEntity) {
        commonUserRepository.save(commonUserEntity);
    }

    public void join(CompanyUserEntity companyUserEntity) {
        companyUserRepository.save(companyUserEntity);
    }

    public void Join(HostUserEntity hostUserEntity) {
        hostUserRepository.save(hostUserEntity);
    }
}
