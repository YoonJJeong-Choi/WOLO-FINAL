package com.kh.kh_final.member.user.companyUser.service;

import com.kh.kh_final.member.user.common.enums.CommonErrorCode;
import com.kh.kh_final.member.user.common.exception.memberException.CommonUserException;
import com.kh.kh_final.member.user.common.service.CommonService;
import com.kh.kh_final.member.user.common.service.EmailService;
import com.kh.kh_final.member.user.common.enums.ApproveState;
import com.kh.kh_final.member.user.companyUser.dto.CompanyUserReqDto;
import com.kh.kh_final.member.user.companyUser.dto.CompanyUserRespDto;
import com.kh.kh_final.member.user.companyUser.entity.CompanyUserEntity;
import com.kh.kh_final.member.user.companyUser.repository.CompanyUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class CompanyUserService {
    private final CompanyUserRepository companyUserRepository;
    private final CommonService commonService;
    private final EmailService emailService;

    public void join(CompanyUserReqDto CompanyUserReqDto) {
        CompanyUserEntity companyUserEntity = CompanyUserEntity.from(CompanyUserReqDto);
        commonService.join(companyUserEntity);

        String link = "http://192.168.20.153:8080/api/company/check?email=" + companyUserEntity.getCompanyUserEmail();
        emailService.sendCheckEmail(companyUserEntity.getCompanyUserEmail(), link);

    }

    public void checkEmail(String email) {
        CompanyUserEntity companyUserEntity = companyUserRepository.findByCompanyUserEmail(email);
        checkUser(companyUserEntity);
        companyUserEntity.checkEmail();
        companyUserRepository.save(companyUserEntity);
    }


    public CompanyUserRespDto login(CompanyUserReqDto reqDto) {
        CompanyUserEntity companyUserEntity = companyUserRepository.findByCompanyIdAndApproveStateNot(reqDto.getCompanyId(), ApproveState.DELETE);
        checkUser(companyUserEntity);
        checkPassword(companyUserEntity, reqDto);
        return CompanyUserRespDto.from(companyUserEntity);
    }


    private void checkUser(CompanyUserEntity companyUserEntity) {
        if (companyUserEntity == null) {
            throw new CommonUserException(CommonErrorCode.USER_NOT_FOUND);
        }
    }

    private void checkPassword(CompanyUserEntity companyUserEntity, CompanyUserReqDto reqDto) {

        if (reqDto.getCompanyPassword() == null || reqDto.getCompanyPassword().isBlank()) {
            throw new CommonUserException(CommonErrorCode.PASSWORD_EMPTY);
        }

        if (!companyUserEntity.getCompanyPassword().equals(reqDto.getCompanyPassword())) {
            throw new CommonUserException(CommonErrorCode.PASSWORD_MISSMATCH);
        }
    }
}
