package com.mentorship.graduationpage.controller;

import com.mentorship.graduationpage.dto.ProjectSummaryDTO;
import com.mentorship.graduationpage.dto.ProjectTypeDTO;
import com.mentorship.graduationpage.mapper.ProjectMapper;
import com.mentorship.graduationpage.model.ProjectEntity;
import com.mentorship.graduationpage.service.ProjectService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Collections;
import java.util.Set;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ProjectController.class)
class ProjectControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private ProjectService projectService;
    @MockBean
    private ProjectMapper projectMapper;
    private static final String URL = "/api/projects";

    @Test
    @DisplayName("GET /projects?year=2023 returns 200 OK and a valid JSON")
    void getListOfProjectsBySeasonName_ReturnsProjects() throws Exception {
        String seasonName = "2023";
        ProjectSummaryDTO dummyDto = new ProjectSummaryDTO(1, "She does TECH",
                Set.of(new ProjectTypeDTO("Practice Project"), new ProjectTypeDTO("STEM")));
        Page<ProjectEntity> projectPage = new PageImpl<>(Collections.singletonList(new ProjectEntity()));
        Page<ProjectSummaryDTO> projectDtoPage = new PageImpl<>(Collections.singletonList(dummyDto));

        when(projectService.getProjectsBySeasonName(seasonName, 0, 9)).thenReturn(projectPage);
        when(projectMapper.projectEntityToProjectSummaryDTO(any(ProjectEntity.class))).thenReturn(dummyDto);

        mockMvc.perform(MockMvcRequestBuilders.get(URL)
                        .param("year", seasonName)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.content").exists())
                .andExpect(jsonPath("$.content[0]").isNotEmpty());
    }
}