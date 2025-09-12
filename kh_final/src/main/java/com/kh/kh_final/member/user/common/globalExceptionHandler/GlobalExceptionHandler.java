package com.kh.kh_final.member.user.common.globalExceptionHandler;

import com.kh.kh_final.member.user.common.dto.ErrorRespDto;
import com.kh.kh_final.member.user.common.exception.memberException.CommonException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CommonException.class)
    public ResponseEntity<ErrorRespDto> handleCommonException(CommonException exception){
        ErrorRespDto errorRespDto = new ErrorRespDto(exception.getErrorCode(), exception.getMessage());
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(errorRespDto);

    }



}
