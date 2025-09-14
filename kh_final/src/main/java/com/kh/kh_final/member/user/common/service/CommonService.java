package com.kh.kh_final.member.user.common.service;

import com.kh.kh_final.member.user.commonUser.entity.CommonEntity;
import com.kh.kh_final.member.user.commonUser.repository.CommonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class CommonService {

    private final CommonRepository commonRepository;

    public void join(CommonEntity commonEntity) {
        commonRepository.save(commonEntity);
    }



}
