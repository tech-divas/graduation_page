package com.mentorship.graduationpage.controller;

import com.mentorship.graduationpage.dto.ProjectListResponse;
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
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.List;
import java.util.Set;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
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
    private ProjectSummaryDTO dummyDto1;
    private ProjectSummaryDTO dummyDto2;
    private Pageable pageable;
    @BeforeEach
    void setup() {
        dummyDto1 = new ProjectSummaryDTO(1, "She does TECH",
                Set.of(new ProjectTypeDTO("Practice Project"), new ProjectTypeDTO("STEM")));
        dummyDto2 = new ProjectSummaryDTO(2, "Wonderful World",
                Set.of(new ProjectTypeDTO("SpringUp"), new ProjectTypeDTO("Healthcare")));
        pageable = PageRequest.of(0, 2);
    }
    @Test
    @DisplayName("GET /projects?year=2023 returns 200 OK and a valid JSON")
    void getListOfProjectsBySeasonName_ReturnsProjects() throws Exception {
        String seasonName = "2023";

        Page<ProjectEntity> expected = new PageImpl<>(List.of(new ProjectEntity()), pageable, 2);
        List<ProjectSummaryDTO> projectSummaryDTOList = List.of(dummyDto1, dummyDto2);
        ProjectListResponse projectListResponse = ProjectListResponse.builder().size(2).last(true).page(0).content(Arrays.asList(dummyDto1, dummyDto2)).build();

        given(projectService.getProjectsBySeasonName(seasonName, 0, 2)).willReturn(expected);
        given(projectMapper.projectEntityToProjectSummaryDTO(any(ProjectEntity.class))).willReturn(dummyDto1, dummyDto2);
        given(projectService.createProjectResponse(projectSummaryDTOList, expected)).willReturn(projectListResponse);

        mockMvc.perform(MockMvcRequestBuilders.get(URL)
                        .param("year", seasonName)
                        .param("page", "0")
                        .param("size", "2"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("$.content.size()", CoreMatchers.is(projectListResponse.getContent().size())));
    }
}