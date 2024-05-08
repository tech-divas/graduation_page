package com.mentorship.graduationpage.service;

import com.mentorship.graduationpage.model.ParticipantEntity;
import org.springframework.data.domain.Page;

public interface ParticipantService {
    Page<ParticipantEntity> findParticipantBySeasonName (String seasonName, int page, int size);

    Page<ParticipantEntity> findParticipantsByRole(String role, int page, int size);

    Page<ParticipantEntity> searchParticipants(String query, int page, int size);
}
