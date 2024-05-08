package com.mentorship.graduationpage.service.impl;

import com.mentorship.graduationpage.enums.MenteeRole;
import com.mentorship.graduationpage.enums.MentorRole;
import com.mentorship.graduationpage.enums.ExpertRole;
import com.mentorship.graduationpage.model.ParticipantEntity;
import com.mentorship.graduationpage.repository.ParticipantRepository;
import com.mentorship.graduationpage.service.ParticipantService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

import static org.springframework.data.domain.PageRequest.of;

@Service
@RequiredArgsConstructor
@Log4j2
public class ParticipantServiceIml implements ParticipantService {

    private final ParticipantRepository repository;

    @Override
    public Page<ParticipantEntity> findParticipantBySeasonName(String seasonName, int page, int size) {
        return repository.findBySeasonName(seasonName, of(page, size));
    }

    @Override
    public Page<ParticipantEntity> findParticipantsByRole(String role, int page, int size) {
        Set<String> roles = switch (role) {
            case "mentees" -> Arrays.stream(MenteeRole.values()).map(MenteeRole::getValue).collect(Collectors.toSet());
            case "mentors" -> Arrays.stream(MentorRole.values()).map(MentorRole::getValue).collect(Collectors.toSet());
            case "experts" -> Arrays.stream(ExpertRole.values()).map(ExpertRole::getValue).collect(Collectors.toSet());
            default -> throw new IllegalArgumentException("Unexpected value: " + role);
        };
        return repository.findByRoleIn(roles, of(page, size));
    }

    @Override
    public Page<ParticipantEntity> searchParticipants(String query, int page, int size) {
        log.info("Fetching participants according to the query: {}", query);
        return repository.findByNameContainingIgnoreCase(query, of(page, size));
    }
}