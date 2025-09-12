package com.kh.kh_final.member.user.commonUser.service;

import com.kh.kh_final.member.user.common.enums.CommonErrorCode;
import com.kh.kh_final.member.user.common.exception.memberException.CommonException;
import com.kh.kh_final.member.user.commonUser.dto.CommonReqDto;
import com.kh.kh_final.member.user.commonUser.dto.CommonRespDto;
import com.kh.kh_final.member.user.commonUser.entity.CommonEntity;
import com.kh.kh_final.member.user.commonUser.enums.ApproveState;
import com.kh.kh_final.member.user.commonUser.repository.CommonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class CommonService {
    private final CommonRepository commonRepository;

    public void join(CommonReqDto reqDto) {
        CommonEntity commonEntity = CommonEntity.from(reqDto);
        commonRepository.save(commonEntity);
    }

    public CommonRespDto login(CommonReqDto reqDto) {
        CommonEntity commonEntity = commonRepository.findByCommonIdAndApproveStateNot(reqDto.getCommonId(), ApproveState.DELETE);
        checkUser(commonEntity);
        checkPassword(commonEntity,reqDto);
        return CommonRespDto.from(commonEntity);
    }


    private void checkUser(CommonEntity commonEntity) {
        if(commonEntity==null){
            throw new CommonException(CommonErrorCode.USER_NOT_FOUND);
        }
    }

    private void checkPassword(CommonEntity commonEntity, CommonReqDto reqDto) {

        if( reqDto.getCommonPassword() == null || reqDto.getCommonPassword().isBlank()){
            throw new CommonException(CommonErrorCode.PASSWORD_EMPTY);
        }

        if(!commonEntity.getCommonPassword().equals(reqDto.getCommonPassword())){
            throw new CommonException(CommonErrorCode.PASSWORD_MISSMATCH);
        }


    }

}
