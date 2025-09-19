package com.kh.kh_final.member.user.security;

import com.kh.kh_final.member.user.common.enums.ApproveState;
import com.kh.kh_final.member.user.common.enums.CommonErrorCode;
import com.kh.kh_final.member.user.common.exception.memberException.CommonUserException;
import com.kh.kh_final.member.user.commonUser.entity.CommonUserEntity;
import com.kh.kh_final.member.user.commonUser.repository.CommonUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommonUserDetailsService implements UserDetailsService {
    private final CommonUserRepository commonUserRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        CommonUserEntity entity = commonUserRepository.findByCommonIdAndApproveStateNot(username, ApproveState.DELETE);
        if(entity == null){
            throw new CommonUserException(CommonErrorCode.USER_NOT_FOUND);
        }
        return new CommonUserDetails(entity);
    }
}
