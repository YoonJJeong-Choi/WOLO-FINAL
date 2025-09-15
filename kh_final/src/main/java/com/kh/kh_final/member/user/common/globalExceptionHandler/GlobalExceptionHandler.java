package com.kh.kh_final.member.user.common.globalExceptionHandler;

import com.kh.kh_final.member.user.common.dto.EmailRespDto;
import com.kh.kh_final.member.user.common.dto.ErrorRespDto;
import com.kh.kh_final.member.user.common.exception.emailException.EmailException;
import com.kh.kh_final.member.user.common.exception.memberException.CommonUserException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CommonUserException.class)
    public ResponseEntity<ErrorRespDto> handleCommonUserException(CommonUserException exception){
        ErrorRespDto errorRespDto = new ErrorRespDto(exception.getErrorMemberCode(), exception.getMessage());
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(errorRespDto);
    }

    @ExceptionHandler(EmailException.class)
    public ResponseEntity<EmailRespDto> handleEmailException(EmailException exception){
        EmailRespDto errorRespDto = new EmailRespDto(exception.getErrorEmailCode(), exception.getMessage());
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(errorRespDto);
    }



}
