package com.kh.kh_final.member.user.commonUser.service;

import com.kh.kh_final.member.user.common.enums.CommonErrorCode;
import com.kh.kh_final.member.user.common.exception.memberException.CommonUserException;
import com.kh.kh_final.member.user.common.service.CommonService;
import com.kh.kh_final.member.user.common.service.EmailService;
import com.kh.kh_final.member.user.commonUser.dto.CommonUserReqDto;
import com.kh.kh_final.member.user.commonUser.entity.CommonUserEntity;
import com.kh.kh_final.member.user.commonUser.repository.CommonUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class CommonUserService {
    private final CommonUserRepository commonUserRepository;
    private final CommonService commonService;
    private final EmailService emailService;
    private final BCryptPasswordEncoder encoder;

    public void join(CommonUserReqDto reqDto) {
        CommonUserEntity entity = CommonUserEntity.from(reqDto, encoder);
        commonService.join(entity);

        String link = "http://192.168.20.153:8080/api/common/check?email=" + entity.getCommonUserEmail();
        emailService.sendCheckEmail(entity.getCommonUserEmail(), link);

    }

    public void checkEmail(String email) {
        CommonUserEntity entity = commonUserRepository.findByCommonUserEmail(email);
        checkUser(entity);
        entity.checkEmail();
        commonUserRepository.save(entity);
    }

    private void checkUser(CommonUserEntity commonUserEntity) {
        if (commonUserEntity == null) {
            throw new CommonUserException(CommonErrorCode.USER_NOT_FOUND);
        }
    }

}
