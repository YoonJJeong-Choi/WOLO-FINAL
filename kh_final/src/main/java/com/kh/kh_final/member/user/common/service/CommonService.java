package com.kh.kh_final.member.user.common.service;

import com.kh.kh_final.member.user.commonUser.entity.CommonUserEntity;
import com.kh.kh_final.member.user.commonUser.repository.CommonUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class CommonService {

    private final CommonUserRepository commonUserRepository;

    public void join(CommonUserEntity commonUserEntity) {
        commonUserRepository.save(commonUserEntity);
    }

}
