package com.kh.kh_final.member.user.hostUser.service;

import com.kh.kh_final.member.user.common.enums.ApproveState;
import com.kh.kh_final.member.user.common.enums.CommonErrorCode;
import com.kh.kh_final.member.user.common.exception.memberException.CommonUserException;
import com.kh.kh_final.member.user.common.service.CommonService;
import com.kh.kh_final.member.user.common.service.EmailService;
import com.kh.kh_final.member.user.hostUser.dto.HostUserReqDto;
import com.kh.kh_final.member.user.hostUser.dto.HostUserRespDto;
import com.kh.kh_final.member.user.hostUser.entity.HostUserEntity;
import com.kh.kh_final.member.user.hostUser.repository.HostUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class HostService {

    private final CommonService commonService;
    private final EmailService emailService;
    private final HostUserRepository hostUserRepository;

    public void join(HostUserReqDto reqDto) {
        HostUserEntity hostUserEntity = HostUserEntity.from(reqDto);
        commonService.Join(hostUserEntity);

        String link = "http://192.168.20.153:8080/api/host/check?email=" + hostUserEntity.getHostUserEmail();
        emailService.sendCheckEmail(hostUserEntity.getHostUserEmail(), link);
    }

    public void checkEmail(String email) {
        HostUserEntity hostUserEntity = hostUserRepository.findByHostUserEmail(email);
        checkUser(hostUserEntity);
        hostUserEntity.checkEmail();
        hostUserRepository.save(hostUserEntity);
    }


    public HostUserRespDto login(HostUserReqDto reqDto) {
        HostUserEntity hostUserEntity = hostUserRepository.findByHostIdAndApproveStateNot(reqDto.getHostId(), ApproveState.DELETE);
        checkUser(hostUserEntity);
        checkPassword(hostUserEntity, reqDto);
        return HostUserRespDto.from(hostUserEntity);
    }


    private void checkUser(HostUserEntity hostUserEntity) {
        if (hostUserEntity == null) {
            throw new CommonUserException(CommonErrorCode.USER_NOT_FOUND);
        }
    }

    private void checkPassword(HostUserEntity hostUserEntity, HostUserReqDto reqDto) {

        if (reqDto.getHostPassword() == null || reqDto.getHostPassword().isBlank()) {
            throw new CommonUserException(CommonErrorCode.PASSWORD_EMPTY);
        }

        if (!hostUserEntity.getHostPassword().equals(reqDto.getHostPassword())) {
            throw new CommonUserException(CommonErrorCode.PASSWORD_MISSMATCH);
        }
    }
}
