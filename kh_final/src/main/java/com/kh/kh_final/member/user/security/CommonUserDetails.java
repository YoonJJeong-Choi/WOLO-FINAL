package com.kh.kh_final.member.user.security;

import com.kh.kh_final.member.user.commonUser.entity.CommonUserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@RequiredArgsConstructor
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
}
