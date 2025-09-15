package com.kh.kh_final.member.user.common.service;

import com.kh.kh_final.member.user.common.enums.CommonErrorCode;
import com.kh.kh_final.member.user.common.exception.emailException.EmailException;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {
    private final JavaMailSender mailSender;

    public void sendCheckEmail(String commonEmail, String link) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom("jhj1776@naver.com");
            helper.setTo(commonEmail);
            helper.setSubject("[회원가입 인증] 이메일 인증 요청");
            helper.setText(
                    "<p> 회원가입을 완료하려면 아래 링크를 클릭해 주세요!<p> "
                    + "<a href = '" + link + "'>이메일 인증 완료</a>", true
            );
            mailSender.send(message);
        } catch (MessagingException e) {
            throw new EmailException(CommonErrorCode.EMAIL_SEND_FAIL);
        }
    }
}
