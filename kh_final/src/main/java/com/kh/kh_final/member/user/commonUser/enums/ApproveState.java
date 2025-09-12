package com.kh.kh_final.member.user.commonUser.enums;

import lombok.Getter;

@Getter
public enum ApproveState {
    WAIT("대기"),OK("승인"),NO("반려"),DELETE("삭제");

    private final String description;

    ApproveState(String description) {
        this.description = description;
    }
}
