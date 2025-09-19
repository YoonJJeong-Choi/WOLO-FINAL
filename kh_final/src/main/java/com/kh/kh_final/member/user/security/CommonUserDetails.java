package com.kh.kh_final.member.user.security;

import com.kh.kh_final.member.user.common.enums.ApproveState;
import com.kh.kh_final.member.user.commonUser.entity.CommonUserEntity;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@RequiredArgsConstructor
@Getter
public class CommonUserDetails implements UserDetails {
    private final CommonUserEntity entity;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_COMMON_USER"));
    }

    @Override
    public String getPassword() {
        return entity.getCommonPassword();
    }

    @Override
    public String getUsername() {
        return entity.getCommonId();
    }


    public String getCommonId() {
        return entity.getCommonId();
    }

    public String getCommonNickName() {
        return entity.getCommonNickName();
    }

    public String getCommonName() {
        return entity.getCommonName();
    }

    public String getCommonUserEmail() {
        return entity.getCommonUserEmail();
    }

    public String getCommonPhoneNumber() {
        return entity.getCommonPhoneNumber();
    }

    public String getCommonAddress() {
        return entity.getCommonAddress();
    }

    public LocalDateTime getCommonJoinDate() {
        return entity.getCommonJoinDate();
    }

    public LocalDateTime getCommonUpdateDate() {
        return entity.getCommonUpdateDate();
    }

    public ApproveState getApproveState() {
        return entity.getApproveState();
    }
}
