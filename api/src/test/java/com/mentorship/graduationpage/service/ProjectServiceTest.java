package com.mentorship.graduationpage.service;

import com.mentorship.graduationpage.model.ProjectEntity;
import com.mentorship.graduationpage.repository.ProjectRepository;
import com.mentorship.graduationpage.service.impl.ProjectServiceIml;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class ProjectServiceTest {
    @InjectMocks
    private ProjectServiceIml service;
    @Mock
    private ProjectRepository repository;

    private String seasonName;

    private Pageable pageable;

    @BeforeEach
    void setUp() {
        seasonName = "2023";
        pageable = PageRequest.of(0, 2);
    }

    @Test
    @DisplayName("Get a project page")
    void getProjectsBySeasonName_returnsProjectsPage() {
        Page<ProjectEntity> expected = new PageImpl<>(List.of(new ProjectEntity()), pageable, 2);

        when(repository.findBySeasonName(seasonName, pageable)).thenReturn(expected);

        Page<ProjectEntity> result = service.getProjectsBySeasonName("2023", 0, 2);

        assertNotNull(result);
        assertEquals(expected, result);
        assertEquals(0, result.getNumber());
        assertEquals(2, result.getSize());

    }
}