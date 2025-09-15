package com.kh.kh_final.member.user.commonUser.service;

import com.kh.kh_final.member.user.common.enums.CommonErrorCode;
import com.kh.kh_final.member.user.common.exception.memberException.CommonUserException;
import com.kh.kh_final.member.user.common.service.CommonService;
import com.kh.kh_final.member.user.common.service.EmailService;
import com.kh.kh_final.member.user.commonUser.dto.CommonUserReqDto;
import com.kh.kh_final.member.user.commonUser.dto.CommonUserRespDto;
import com.kh.kh_final.member.user.commonUser.entity.CommonUserEntity;
import com.kh.kh_final.member.user.common.enums.ApproveState;
import com.kh.kh_final.member.user.commonUser.repository.CommonUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class CommonUserService {
    private final CommonUserRepository commonUserRepository;
    private final CommonService commonService;
    private final EmailService emailService;

    public void join(CommonUserReqDto reqDto) {
        CommonUserEntity commonUserEntity = CommonUserEntity.from(reqDto);
        commonService.join(commonUserEntity);

        String link = "http://192.168.20.153:8080/api/common/check?email=" + commonUserEntity.getCommonUserEmail();
        emailService.sendCheckEmail(commonUserEntity.getCommonUserEmail(), link);

    }

    public void checkEmail(String email) {
        CommonUserEntity commonUserEntity = commonUserRepository.findByCommonUserEmail(email);
        checkUser(commonUserEntity);
        commonUserEntity.checkEmail();
        commonUserRepository.save(commonUserEntity);
    }


    public CommonUserRespDto login(CommonUserReqDto reqDto) {
        CommonUserEntity commonUserEntity = commonUserRepository.findByCommonIdAndApproveStateNot(reqDto.getCommonId(), ApproveState.DELETE);
        checkUser(commonUserEntity);
        checkPassword(commonUserEntity, reqDto);
        return CommonUserRespDto.from(commonUserEntity);
    }


    private void checkUser(CommonUserEntity commonUserEntity) {
        if (commonUserEntity == null) {
            throw new CommonUserException(CommonErrorCode.USER_NOT_FOUND);
        }
    }

    private void checkPassword(CommonUserEntity commonUserEntity, CommonUserReqDto reqDto) {

        if (reqDto.getCommonPassword() == null || reqDto.getCommonPassword().isBlank()) {
            throw new CommonUserException(CommonErrorCode.PASSWORD_EMPTY);
        }

        if (!commonUserEntity.getCommonPassword().equals(reqDto.getCommonPassword())) {
            throw new CommonUserException(CommonErrorCode.PASSWORD_MISSMATCH);
        }
    }
}
