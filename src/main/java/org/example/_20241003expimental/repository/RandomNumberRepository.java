package org.example._20241003expimental.repository;

import org.example._20241003expimental.model.RandomNumber;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RandomNumberRepository extends JpaRepository<RandomNumber, Long> {
}