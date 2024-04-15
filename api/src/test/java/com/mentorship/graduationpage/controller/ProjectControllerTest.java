package com.mentorship.graduationpage.controller;

import com.mentorship.graduationpage.dto.ProjectSummaryDTO;
import com.mentorship.graduationpage.dto.ProjectTypeDTO;
import com.mentorship.graduationpage.mapper.ProjectMapper;
import com.mentorship.graduationpage.model.ProjectEntity;
import com.mentorship.graduationpage.service.ProjectService;
import org.hamcrest.CoreMatchers;
import org.junit.jupiter.api.BeforeEach;
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
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Collections;
import java.util.Set;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
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
    private ProjectSummaryDTO dummyDto;
    private String seasonName;
    @BeforeEach
    void setup() {
        dummyDto = new ProjectSummaryDTO(1, "She does TECH",
                Set.of(new ProjectTypeDTO("Practice Project"), new ProjectTypeDTO("STEM")));
        seasonName = "2023";
    }
    @Test
    @DisplayName("GET /projects?year=2023 returns 200 OK and a valid JSON")
    public void testGetListOfProjectsBySeasonName() throws Exception {
        Page<ProjectEntity> projectPage = new PageImpl<>(Collections.singletonList(new ProjectEntity()));

        when(projectService.getProjectsBySeasonName(anyString(), anyInt(), anyInt())).thenReturn(projectPage);
        when(projectMapper.projectEntityToProjectSummaryDTO(any(ProjectEntity.class))).thenReturn(dummyDto);

        // Executing the request
        mockMvc.perform(MockMvcRequestBuilders.get(URL)
                        .param("year", seasonName)
                        .param("page", "0")
                        .param("size", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("$.content.size()", CoreMatchers.is(projectPage.getContent().size())));
    }

    @Test
    @DisplayName("GET /projects?year=2023 returns 204 no content")
    public void testGetListOfProjectsBySeasonName_ReturnsNoContent() throws Exception {
        Page<ProjectEntity> projectPage = new PageImpl<>(Collections.emptyList());
        when(projectService.getProjectsBySeasonName(anyString(), anyInt(), anyInt())).thenReturn(projectPage);

        // Executing the request
        mockMvc.perform(MockMvcRequestBuilders.get(URL)
                        .param("year", seasonName)
                        .param("page", "1")
                        .param("size", "1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent());
    }
}
